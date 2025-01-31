import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/rajashekar-reddy-resume/", // Set this to match your repo name
});

