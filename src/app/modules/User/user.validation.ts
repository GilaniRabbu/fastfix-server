import { z } from 'zod';

export const createUserValidation = z
  .object({
    phone: z.string().min(1, 'Phone is required'),
    role: z.enum(['SUPER_ADMIN', 'ADMIN', 'USER', 'CUSTOMER', 'DINMAJUR'], {
      errorMap: () => ({ message: 'Required role is missing' }),
    }),
    username: z.string().optional(),
    email: z.string().email('Invalid email format').optional(),
    userStatus: z
      .enum(['ACTIVE', 'INACTIVE', 'BLOCKED', 'PENDING', 'DELETED'])
      .default('ACTIVE')
      .optional(),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    isEmailVerified: z.boolean().default(false).optional(),
    isPhoneVerified: z.boolean().default(false).optional(),
    isDeliveryPerson: z.boolean().default(false).optional(),
    refreshToken: z.string().optional(),
    refreshTokenExpiry: z.date().optional(),
    isRegistered: z.boolean().default(false).optional(),
    redirectUrl: z.string().optional(),
    otp: z.number().optional(),
    otpExpiry: z.date().optional(),
    otpToken: z.string().optional(),
    dateOfBirth: z.date().optional(),
    isDeleted: z.boolean().default(false).optional(),
    deletedAt: z.date().optional(),
    profile: z.string().optional(),
    addresses: z.array(z.string()).optional(),
    services: z.array(z.string()).optional(),
    portfolio: z.array(z.string()).optional(),
  })
  .strict(); // ✅ Reject unknown fields

export const updateUserValidation = z
  .object({
    phone: z.string().optional(),
    role: z
      .enum(['SUPER_ADMIN', 'ADMIN', 'USER', 'CUSTOMER', 'DINMAJUR'])
      .optional(),
    username: z.string().optional(),
    email: z.string().email('Invalid email format').optional(),
    userStatus: z
      .enum(['ACTIVE', 'INACTIVE', 'BLOCKED', 'PENDING', 'DELETED'])
      .optional(),
    password: z.string().min(6).optional(),
    isEmailVerified: z.boolean().optional(),
    isPhoneVerified: z.boolean().optional(),
    isDeliveryPerson: z.boolean().optional(),
    refreshToken: z.string().optional(),
    refreshTokenExpiry: z.date().optional(),
    isRegistered: z.boolean().optional(),
    redirectUrl: z.string().optional(),
    otp: z.number().optional(),
    otpExpiry: z.date().optional(),
    otpToken: z.string().optional(),
    dateOfBirth: z.date().optional(),
    isDeleted: z.boolean().optional(),
    deletedAt: z.date().optional(),
    profile: z.string().optional(),
    addresses: z.array(z.string()).optional(),
    services: z.array(z.string()).optional(),
    portfolio: z.array(z.string()).optional(),
  })
  .strict(); // ✅ Reject unknown fields
