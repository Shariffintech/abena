let count = 0;

function handleClick() {
  count++;
  console.log(count);
}

<button onClick={handleClick}>
  Clicked {count} {count === 1 ? "time" : times}
</button>;
