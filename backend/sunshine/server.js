const strapi = require('@strapi/strapi');

async function startStrapi() {
  try {
    const instance = strapi();
    await instance.start();
    console.log('Strapi has started successfully.');
  } catch (error) {
    console.error('Failed to start Strapi:', error);
  }
}

startStrapi();
