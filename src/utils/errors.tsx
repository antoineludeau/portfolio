// ERROR BOUNDARIES FALLBACK AND HANDLER

export const ErrorFallback = () => {
  return (
    <div role="alert">
      Une erreur s'est produite. Si le problème persiste, merci de contacter
      l'administrateur à l'adresse suivante : antoine.ludeau@gmail.com
    </div>
  );
};

export const ErrorHandler = (error: Error) => {
  console.log(error);
};
