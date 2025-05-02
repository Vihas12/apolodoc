'use client';

import { useState, useEffect, useRef } from 'react';

const DoctorForm = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [form, setForm] = useState({
    name: '',
    specialty: '',
    yearsExperience: '',
    qualifications: '',
    location: '',
    language: [] as string[], // Array of languages
    clinic: '',
    rating: 0,
    ratingCount: '',
    onlineFee: 0,
    visitFee: 0,
    photoUrl: '',
  });

  const [uploading, setUploading] = useState(false);
  const [photoSource, setPhotoSource] = useState<'local' | 'url'>('local');
  const [mounted, setMounted] = useState(false); // for hydration fix

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setForm(prev => {
      const newLanguages = checked
        ? [...prev.language, value]
        : prev.language.filter(language => language !== value);
      return { ...prev, language: newLanguages };
    });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'student_uploads'); // Replace with actual preset

    setUploading(true);
    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/dkl2kdu7e/image/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.secure_url) {
        setForm(prev => ({ ...prev, photoUrl: data.secure_url }));
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    } catch (error) {
      console.error("Image upload failed", error);
      alert('Image upload failed. Try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/doctors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Doctor added successfully!');
      setForm({
        name: '',
        specialty: '',
        yearsExperience: '',
        qualifications: '',
        location: '',
        language: [], // Reset language
        clinic: '',
        rating: 0,
        ratingCount: '',
        onlineFee: 0,
        visitFee: 0,
        photoUrl: '',
      });
    } else {
      alert('Error adding doctor');
    }
  };

  const languages = [
    'English', 'Hindi', 'Telugu', 'Punjabi', 'Bengali', 'Marathi', 'Urdu', 'Gujarati', 'Tamil', 'Kannada', 'Oriya', 'Persian', 'Assamese'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-4 bg-cyan-200 border-2 border-cyan-800  rounded shadow">
      {Object.entries(form).map(([key, value]) => (
        key !== 'photoUrl' && key !== 'language' && (
          <div key={key}>
            <label className="block font-medium capitalize">{key}</label>
            <input
              type={typeof value === 'number' ? 'number' : 'text'}
              name={key}
              value={value}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
              required={['name', 'specialty', 'qualifications', 'yearsExperience', 'clinic'].includes(key)}
            />
          </div>
        )
      ))}

      <div>
        <label className="block font-medium">Language</label>
        <div className="grid grid-cols-2 gap-4">
          {languages.map(language => (
            <label key={language} className="flex items-center">
              <input
                type="checkbox"
                value={language}
                checked={form.language.includes(language)}
                onChange={handleLanguageChange}
                className="mr-2"
              />
              {language}
            </label>
          ))}
        </div>
      </div>

      {mounted && (
        <div>
          <label className="block font-medium mb-1">Photo Source</label>
          <div className="flex gap-4 mb-2">
            <label>
              <input
                type="radio"
                name="photoSource"
                value="local"
                checked={photoSource === 'local'}
                onChange={() => setPhotoSource('local')}
              /> Upload from device
            </label>
            <label>
              <input
                type="radio"
                name="photoSource"
                value="url"
                checked={photoSource === 'url'}
                onChange={() => setPhotoSource('url')}
              /> Use image URL
            </label>
          </div>

          {photoSource === 'local' ? (
            <>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full"
                ref={fileInputRef}
              />
              {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
            </>
          ) : (
            <input
              type="text"
              placeholder="https://example.com/image.jpg"
              value={form.photoUrl}
              onChange={(e) => setForm(prev => ({ ...prev, photoUrl: e.target.value }))}
              className="w-full border px-3 py-2 rounded"
            />
          )}

          {form.photoUrl && (
            <img src={form.photoUrl} alt="Preview" className="w-16 h-16 mt-2 rounded-full" />
          )}
        </div>
      )}

      <button type="submit" className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-800">
        Add Doctor
      </button>
    </form>
  );
};

export default DoctorForm;
