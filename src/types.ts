export type ServiceCategory = 'hypnotherapy' | 'certification' | 'coaching' | 'additional';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  sessionDuration: string;
  targetAudience: string;
  badge?: string;
  recommendedSessions?: string;
}

export interface CertificationProgram {
  id: string;
  code: 'S.CH' | 'C.Ht' | 'BUNDLE' | 'NGH-USA' | 'DOUBLE';
  title: string;
  credentialTitle: string;
  accreditation: string;
  duration: string;
  format: string;
  prerequisites: string;
  description: string;
  syllabus: {
    module: string;
    topics: string[];
  }[];
  facilities: string[];
  investment: number;
  originalPrice: number;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  ageOrProfession: string;
  problem: string;
  result: string;
  category: 'Hipnoterapi' | 'Sertifikasi S.CH & C.Ht' | 'Life Coaching';
  rating: number;
  anonymizedNote?: string;
}

export interface AssessmentQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    points: {
      hypnotherapy: number;
      coaching: number;
      certification: number;
      additional: number;
    };
  }[];
}

export interface BookingFormData {
  fullName: string;
  whatsapp: string;
  email: string;
  serviceCategory: string;
  specificService: string;
  sessionType: 'Klinik (Tatap Muka)' | 'Online (Video Call)';
  preferredDate: string;
  preferredTime: string;
  issueDescription: string;
}
