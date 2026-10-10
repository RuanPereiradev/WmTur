import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// base './' = caminhos relativos: funciona em ruanpereiradev.github.io/WmTur/ e num domínio próprio (.com)
export default defineConfig({ plugins: [react()], base: './' });
