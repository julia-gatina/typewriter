const sentence = 'hello at lighthouse labs';
let n = 0;

for (let i = 0; i < sentence.length; i++) {
  const char = sentence[i];
  setTimeout(() => {
    process.stdout.write(char);
    // after the last loop
    if (i === sentence.length - 1) {
      process.stdout.write('\n');
    }
  }, (n += 100));
}
