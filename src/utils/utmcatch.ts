// Définit le type pour les paramètres UTM
type UTMParameters = {
  [key: string]: string;
};

// Fonction pour extraire les paramètres UTM de l'URL
function getUTMParameters(url: string): UTMParameters {
  const params: UTMParameters = {};
  const parser = new URL(url);
  parser.searchParams.forEach((value, key) => {
    if (key.startsWith('utm_')) {
      params[key] = value;
    }
  });
  return params;
}

export function fillHiddenFieldsWithUTM(): void {
  const url = window.location.href;
  const utmParams = getUTMParameters(url);

  Object.keys(utmParams).forEach((key) => {
    const input = document.querySelector(`input[name="${key}"]`) as HTMLInputElement;
    if (input) {
      input.value = utmParams[key];
    }
  });
}
