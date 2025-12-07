# train-lle Documentation

This is the official documentation website for [train-lle](https://github.com/students-dev/train-lle), the Local Learning Engine for Node.js.

## Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/students-dev/train-lle-docs.git
   cd train-lle-docs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
```

The built files will be in the `out/` directory, ready for deployment.

## Deployment to Vercel

1. Push this repository to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically build and deploy the site
4. Your documentation will be live at `https://your-project.vercel.app`

## Project Structure

- `app/` - Next.js app router pages
- `components/` - Reusable React components
- `content/` - MDX documentation files
- `public/` - Static assets
- `styles/` - Global styles

## Contributing

See the [Contributing guide](/docs/contributing) for information on how to contribute to the documentation.

## Credits

This documentation website was created by Ramkrishna Bhatt, a student at Milagres PU College Kallinupur and founder of students-dev.

## License

This documentation is licensed under the Apache License 2.0, matching the train-lle project license.
