import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { ADDRESS, COMPANY, CONTACT } from '../data/company';

/** The company in plain text, for AI assistants and search tools (llmstxt.org): what it is, its products, its work. */
export const GET: APIRoute = async () => {
  const products = (await getCollection('products')).sort((a, b) => a.data.order - b.data.order);
  const projects = await getCollection('projects');
  const lines = [
    `# ${COMPANY.name}`,
    '',
    `> ${COMPANY.name} is a software company in Rajasthan, India (Udyam Registration No. ${COMPANY.udyam}). It makes and runs its own software products and builds websites and software for clients. "${COMPANY.slogan}"`,
    '',
    `- Registered office: ${ADDRESS.lines.join(', ')}`,
    `- Phone and WhatsApp: ${CONTACT.phone}`,
    `- Email: ${CONTACT.email}`,
    '',
    '## Products',
    ...products.map((p) => `- [${p.data.name}](${COMPANY.site}/products/${p.id}/): ${p.data.tagline}. ${p.data.summary} Website: ${p.data.url}`),
    '',
    '## Work for clients',
    ...(projects.length ? projects.map((p) => `- [${p.data.title} for ${p.data.client}](${COMPANY.site}/work/${p.id}/): ${p.data.summary}`) : ['- None listed yet.']),
    '',
    '## Pages',
    `- [About](${COMPANY.site}/about/)`,
    `- [Contact](${COMPANY.site}/contact/)`,
    `- [Privacy policy](${COMPANY.site}/privacy-policy/)`,
    `- [Terms of use](${COMPANY.site}/terms/)`,
  ];
  return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
