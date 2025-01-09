export const logError = (message: string, data?: any) => {
    console.error(`Error: ${message}`, data);
    // Optionally, send errors to an external logging service.
  };
  