import "dotenv/config";

console.log('Current Admin Credentials:');
console.log('Email:', process.env.ADMIN_EMAIL || 'Not set');
console.log('Password:', process.env.ADMIN_PASSWORD || 'Not set');

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
  console.log('\nTo set new credentials, add these lines to your .env file:');
  console.log('ADMIN_EMAIL=admin@example.com');
  console.log('ADMIN_PASSWORD=your_password');
}
