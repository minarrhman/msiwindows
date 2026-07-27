export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",

    name: "Window Service",

    telephone: "+61450351924",

    email: "mswindows777@gmail.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },

    areaServed: [
      "Sydney",
      "Western Sydney",
      "Parramatta",
      "Blacktown",
      "Liverpool",
      "Bankstown",
      "Inner West",
      "North Sydney",
    ],

    url: "https://www.windowservice.com.au",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}