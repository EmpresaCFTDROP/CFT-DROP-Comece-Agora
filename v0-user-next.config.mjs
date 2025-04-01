/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para permitir imagens de domínios externos
  images: {
    domains: ['placeholder.com', 'via.placeholder.com', 'placehold.co'],
    // Você pode adicionar mais domínios conforme necessário
  },
  // Configuração para otimização de imagens
  // Desabilitar temporariamente para facilitar o desenvolvimento
  // Em produção, você pode habilitar novamente
  // imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
};

export default nextConfig;

