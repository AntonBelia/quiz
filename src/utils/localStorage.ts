export const setItem = (key: string, value: any): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        resolve();
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
};

export const getItem = (key: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const item = localStorage.getItem(key);
        resolve(item ? JSON.parse(item) : null);
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
};

export const removeItem = (key: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        localStorage.removeItem(key);
        resolve();
      } catch (error) {
        reject(error);
      }
    }, 500);
  });
};
