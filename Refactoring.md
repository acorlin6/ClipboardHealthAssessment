# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

In the original code, I felt that there were an unnecessary amount of conditionals, and lines of code, for achieving the desired functionality. Additionally, certain cases which seemed to be adressed by combinations of conditionals, had the multiple conditionals split by other code. Some of the conditionals seemed to be unnecessary, as they were covering cases that either already were handled, or at least a change in preceding conditionals could cover them instead. I believed that reducing the amount of conditionals, especially redundant conditionals, introducing early returns, organizing constants at the top of the file, and separating exports from function declarations, made the code more concise and more easily readable. Finally, moving the hashing logic into its own function more modular and testable, as that has function could be used in our testing suite as well.
