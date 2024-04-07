export function generateRandomInputId() {
  return `input_${Math.random().toString(36).substr(2, 9)}`;
}
