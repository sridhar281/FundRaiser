import { create } from 'zustand';
import toast from 'react-hot-toast';
import { axiosInstance } from '../lib/axios'; // Adjust path if needed

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  // ✅ Check if user is authenticated
  checkAuth: async () => {
    set({ isCheckingAuth: true });
    try {
      const response = await axiosInstance.get('/auth/check');
      set({ authUser: response.data });
    } catch (error) {
      set({ authUser: null });
      console.error('Error checking authentication:', error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  // ✅ Signup function with confirmPassword support
  signup: async (formData) => {
    set({ isSigningUp: true });
    try {
      const payload = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      };

      const response = await axiosInstance.post('/auth/signup', payload);
      set({ authUser: response.data });
      toast.success('Signup successful! Please log in.');
      post('/login'); // Redirect to login page after signup
    } catch (error) {
      console.error('Signup error:', error.response?.data);
      toast.error(error.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      set({ isSigningUp: false });
    }
  },
}));