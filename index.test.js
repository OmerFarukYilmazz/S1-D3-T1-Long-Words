const isHardToComprehend = require('./index.js');

describe('Kelimenin algılanabilirliği testleri', () => {
  test('Karakter sayısı çift basamaklı olan kelime için doğru sonucu döndürüyor mu?', () => {
    expect(isHardToComprehend('Vurdumduymaz')).toBe(true);
  });

  test('Karakter sayısı tek basamaklı olan kelime için doğru sonucu döndürüyor mu?', () => {
    expect(isHardToComprehend('Tesla')).toBe(false);
  });

  test('Boş string için doğru sonucu döndürüyor mu?', () => {
    expect(isHardToComprehend('')).toBe(false);
  });

  test('Tam olarak 10 karakter içeren kelime için doğru sonucu döndürüyor mu?', () => {
    expect(isHardToComprehend('Bilgisayar')).toBe(true);
  });

  test('Fonksiyonun dönüş değeri boolean mı?', () => {
    const result = isHardToComprehend('Kontrol');
    expect(typeof result).toBe('boolean');
  });
});