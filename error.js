class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathError {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError(
        "Total parameter harus lebih dari 0",
        "numbers"
      );
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.info(MathError.sum());
  console.info("AMBA");
} catch (err) {
  if (err instanceof ValidationError) {
    console.error(
      `terjadi error di field ${err.field} dengan error : ${err.message}`
    );
  } else {
    console.error(`terjadi error : ${err.message}`);
  }
} finally {
  // finally mau error / tidak akan tereksekusi
  console.info("proggram selesai");
}
