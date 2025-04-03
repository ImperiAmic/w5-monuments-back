import Monument from "./Monument.js";

describe("Given the Vilafranca del Penedès' Santa Maria Basilic monument", () => {
  describe("When it is instantiated", () => {
    const santaMariaBasilica = new Monument(
      "Basílica de Santa María",
      "Santa Maria de Vilafranca, a Gothic-style church in Vilafranca del Penedès, Spain, features impressive stained glass, a striking bell tower, and rich historical significance in the region.",
      "https://upload.wikimedia.org/wikipedia/commons/1/12/Bas%C3%ADlica_de_Santa_Maria_%28Vilafranca_del_Pened%C3%A8s%29_-_1.jpg",
      {
        city: "Vilafranca del Penedès",
        country: "Spain",
      },
    );

    test("Then it should have an ID", () => {
      expect(santaMariaBasilica.id).not.toBe("");
    });

    test("Then it should have 'Basílica de Santa Maria' as a name", () => {
      const expectedName = "Basílica de Santa María";

      expect(santaMariaBasilica.name).toBe(expectedName);
    });

    test("Then it should have 'Santa Maria de Vilafranca, a Gothic-style church in Vilafranca del Penedès, Spain, features impressive stained glass, a striking bell tower, and rich historical significance in the region.' as a description", () => {
      const expectedDescription =
        "Santa Maria de Vilafranca, a Gothic-style church in Vilafranca del Penedès, Spain, features impressive stained glass, a striking bell tower, and rich historical significance in the region.";

      expect(santaMariaBasilica.description).toBe(expectedDescription);
    });

    test("Then it should have 'https://upload.wikimedia.org/wikipedia/commons/1/12/Bas%C3%ADlica_de_Santa_Maria_%28Vilafranca_del_Pened%C3%A8s%29_-_1.jpg' as a URL", () => {
      const expectedImageUrl =
        "https://upload.wikimedia.org/wikipedia/commons/1/12/Bas%C3%ADlica_de_Santa_Maria_%28Vilafranca_del_Pened%C3%A8s%29_-_1.jpg";

      expect(santaMariaBasilica.imageUrl).toBe(expectedImageUrl);
    });

    test("Then it should have 'Vilafranca del Penedès' as a city", () => {
      const expectedCity = "Vilafranca del Penedès";

      expect(santaMariaBasilica.city).toBe(expectedCity);
    });

    test("Then it should have 'Spain' as a city", () => {
      const expectedCountry = "Spain";

      expect(santaMariaBasilica.country).toBe(expectedCountry);
    });
  });
});
