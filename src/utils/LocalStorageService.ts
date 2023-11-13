class LocalStorageService {
  public static setData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public static getData(key: string): string | null {
    return localStorage.getItem(key) ? localStorage.getItem(key) : null;
  }

  public static removeData(key: string): void {
    if (localStorage.getItem(key)) localStorage.removeItem(key);
  }

  public static clearStorage(): void {
    localStorage.clear();
  }
}

export default LocalStorageService;
