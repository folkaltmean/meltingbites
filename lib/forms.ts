// Formspree-style endpoints. Create a form at https://formspree.io (or any
// compatible provider) and drop the endpoint URL in here — the forms already
// POST a FormData payload and expect a JSON { ok: true } style response.
export const FORM_ENDPOINTS = {
  wholesale: "https://formspree.io/f/[FORM_ENDPOINT]",
  contact: "https://formspree.io/f/[FORM_ENDPOINT]",
};

// Forms stay hidden until a real endpoint is in place, so visitors never hit a dead "Send" button.
export const formReady = (endpoint: string) => !endpoint.includes("[");
