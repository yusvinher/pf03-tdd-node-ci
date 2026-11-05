export function esPinValido(pin) {

    if (pin == null || pin === "") {
        return false;
    }

    if (![4, 6].includes(pin.length)) {
        return false;
    }

    if (!/^\d+$/.test(pin)) {
        return false;
    }

    if (/^(\d)\1+$/.test(pin)) {
        return false;
    }

    return true;
}