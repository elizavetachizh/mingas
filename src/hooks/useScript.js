import { useEffect } from 'react';

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default function MyComponent() {
  useScript(
    'https://api.hh.ru/widgets/vacancies/employer?employer_id=1063725&locale=RU&links_color=1560b2&border_color=1560b2&host=rabota.by'
  );
}
