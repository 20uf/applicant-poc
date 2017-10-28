export function nl2br (value) {
    return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
}
