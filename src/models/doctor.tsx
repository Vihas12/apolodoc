import mongoose, { Schema, Document, model } from 'mongoose';

export interface IDoctor extends Document {
  photoUrl?: string;
  name: string;
  specialty?: string;
  yearsExperience?: string;
  qualifications?: string;
  location?: string;
  clinic?: string;
  rating?: number;
  ratingCount?: string;
  onlineFee?: number;
  visitFee?: number;
  createdAt: Date;
  updatedAt: Date;
}

const DoctorSchema: Schema = new Schema<IDoctor>(
  {
    // doctor.model.ts
    photoUrl: { type: String, default: 'https://images.apollo247.in/images/consult_home/icons/male.png?tr=q-80,f-auto,w-100,dpr-2,c-at_max' },
    name: { type: String, required: true },
    specialty: { type: String },
    yearsExperience: { type: String },
    qualifications: { type: String },
    location: { type: String },
    clinic: { type: String },
    rating: { type: Number, default: 0 },
    ratingCount: { type: String, default: '0' },
    onlineFee: { type: Number },
    visitFee: { type: Number },
  },
  { timestamps: true }
);

const Doctor = mongoose.models.Doctor || model<IDoctor>('Doctor', DoctorSchema);

export default Doctor;
