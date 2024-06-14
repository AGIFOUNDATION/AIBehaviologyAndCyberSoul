<script type="text/x-mathjax-config">
MathJax.Hub.Config({
	tex2jax: {
		displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
		inlineMath: [ ['$','$'], ["\\(","\\)"] ],
		skipTags: ["script","noscript","style","textarea","pre","code"],
		processEscapes: true
	}
});
</script>
<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>
<link rel="stylesheet" type="text/css" href="styles/main.css">
<script src="scripts/utils.js"></script>
<script src="scripts/theme.js"></script>

#	How New Capabilities Emerge, An AIT View

> - Author: [LostAbaddon](lostabaddon@gmail.com)
> - Date: 2024/06/03

Let's start with some basic assumptions:

First, we agree that the elements and their properties in a system can be denoted by finite symbols. For example, two elements can be denoted by symbols A and B respectively, and each element has properties such as position and mass, which can also be denoted by symbols PA, PB, MA, MB, etc.

Theoretically, there can exist systems with elements or properties that cannot be denoted by finite symbols, such as a system containing uncountably infinite elements or elements with uncountably infinite distinct properties.

In the systems we actually discuss, the above requirements for finite expression can generally be satisfied, but it is important to emphasize that theoretically, there exist systems that cannot be finitely expressed.

Since the elements and their properties in a system can be finitely expressed, the state of a system at a certain moment can also be finitely expressed and thus can be represented by a finite-length string. Therefore, the motion of the system, i.e., the change of the system state over time, can be viewed as a process of a finite-length string constantly changing (including both content and length) over time.

Next, we agree that any "law" in the system can be described as a mapping from an initial state consisting of finite elements to a final state consisting of finite elements. Then, according to the first agreement, we can describe the "law" as a mapping that maps a finite-length string to another finite-length string.

This agreement actually implies that any element and its properties in the final state can be finitely expressed by the elements and their properties in the initial state.

It is easy to prove that such mappings can be expressed by Turing machines. Only when we extend "finite-length strings" to "countable strings", the set constituted by such mappings will be larger than the set constituted by Turing machines. The cardinality of the former is aleph-1, while the latter is only aleph-0.

Therefore, under the above two seemingly reasonable assumptions, we establish a connection between systems and their laws and Turing machines.

Then, the ability of a system to "emerge" new laws is essentially the ability of "emergence" of new Turing machines in a Turing machine. And this ability is actually the ability of a known Turing machine to output a Turing machine under certain specific inputs, or more precisely, to output a string that can be compiled into a Turing machine in the current environment. The languages acceptable by the new and old Turing machines are not necessarily the same, and in fact, they are generally different, but it is obvious that **the language acceptable by the new Turing machine can be expressed by the language acceptable by the old Turing machine, and the alphabet of the new Turing machine can also be expressed by the alphabet of the old Turing machine**.

Let's switch back to the non-Turing machine perspective, and we will find that the above requirements actually correspond to the following three principles:

1. The underlying laws themselves do not exclude the emergence of new laws and are sufficiently extensible to contain the latter;
2. The motion of objects satisfying the underlying laws can construct the basic units of emerging laws;
3. The objects constituting the basic units mentioned above must have the possibility to form an appropriate configuration as a whole to make the emerging laws operate.

Now let's change our perspective and view Turing machines as mappings from finite-length strings to finite-length strings. Note that previously we did the opposite, and now we are actually showing that the two are equivalent. Among them, if an input string cannot make the Turing machine halt, then the corresponding output string is agreed to be an empty string. Note that such a mapping exists but is uncomputable.

In this way, any Turing machine has an uncomputable property, that is, according to the sequential recursion of the input string, the output string will form a sequence, which may contain duplicate elements, and obviously, this sequence is also uncomputable.

Furthermore, we can split this sequence into two sets. One set consists of all output strings that can be compiled into Turing machines by the environment, while the other set consists of output strings that cannot be compiled into Turing machines by the environment. We denote the latter as $S_0$ and the former as $T_1$. Since the elements in $T_1$ can all be compiled into Turing machines, they can naturally map strings to strings, so their respective output string sequences can also be decomposed into the same two sets. Thus, we can construct the following two sequences:

$$
T_{n + 1} = \bigcup_{T \in T_n} OT(T)\\
S_{n} = \bigcup_{T \in T_n} OS(T)
$$

where $OT(T)$ refers to the set consisting of the part of the output string sequence of Turing machine $T$ that can be compiled into Turing machines by the environment, and $OS(T)$ refers to the set consisting of the part of the output string sequence of Turing machine $T$ that cannot be compiled into Turing machines by the environment.

Based on this, we can define the "emergence depth" of a Turing machine as follows: if $T_n$ is not empty and $T_{n + 1}$ is empty, then $n$ is called the emergence depth of $T$, denoted as $D(T)$. In addition, the length of the shortest Turing machine in $T_n$ is also a very useful quantity, denoted as $E_n(T)$, called the "n-th order emergence length" of Turing machine $T$. It should be noted that since the acceptable languages of the new and old Turing machines are not necessarily the same, the lengths here are all measured by the length of the string in the alphabet of the acceptable language of the initial Turing machine $T$ (note that we mentioned earlier that the alphabet and acceptable language of the new Turing machine can be expressed by the alphabet and acceptable language of the old Turing machine, so this proposition can be true).

Now, let's consider such a question: for the given Turing machine $T$ above, if we randomly input strings with length not exceeding $N$, what will the result be? Especially, if the input is completely random, what will be the situation where new Turing machines can appear in its output, i.e., new laws can emerge?

We first use $S_n(T, N)$ to express the set consisting of the string outputs corresponding to the strings in $S_n(T)$ with input length not exceeding $N$, and use $S(T, N) = \bigcup_{n} S_n(T, N)$ to represent the set consisting of all string outputs.

It is obvious that $S_n(T, N) < \sum_{t \in T_n(T)} c(t, N) D_t(N)$, where $c(t, n)$ is the halting probability of Turing machine $t$ when the input length does not exceed $N$, i.e., the Chaitin constant. $D_t(N)$ is the length of all strings input to $t$, expressed by the alphabet of $T$, not exceeding $N$. When all the alphabets of $t$ can be expressed by $e$ alphabets of $T$, it becomes $D_t(N) = D^{N / e}$.

Finally, we use $Q(T, N) = \frac{S(T, N)}{D^{N}}$ to represent the "output capability" of Turing machine $T$ when the input length does not exceed $N$.

Therefore, when $N < E_1(T)$, we have $Q(T, N) \approx c(T, N)$. According to algorithmic information theory, we know that the Chaitin constant $c(T)$ can be expressed as $c(T) = \sum_{t \in T_1(T)} D^{- L(t)}$, where $L(t)$ means the length of Turing machine $t$. So $c(T, N)$ obviously increases with the increase of $N$, and thus the output capability of Turing machine $T$ increases with the increase of input length.

On the other hand, when $N_1(T) \le N < N_2(T)$, we have $Q(T, N) \approx c(T) + \sum_{t \in T_1(T)} c(t, N) D_t(N) D^{- N} > c(T)$. Obviously, as $N$ increases, it will exceed more and more $E_n(T)$, so $Q(T, N)$ will also become larger and larger.

From this, it can be seen that the increase in the output capability of a Turing machine comes from two aspects. One is that the Chaitin constant itself increases with the increase of input length, and the other is that the longer the output length, the more new higher-order Turing machines the Turing machine can produce, and thus the greater the output capability.

In terms of emergence, it means that **as the system becomes larger, more and more new laws can emerge**.

The most significant one is $E_1(T)$, which is actually the Kolmogorov complexity of the shortest Turing machine in terms of Kolmogorov complexity that $T$ can express. In algorithmic information theory, we know that when the Kolmogorov complexity of a Turing machine is greater than a specific value related to the language, this length will be uncomputable. Moreover, according to Chaitin's incompleteness theorem, when the Kolmogorov complexity of a Turing machine exceeds a specific value related to the language, we cannot even prove whether it is greater than that value when the Kolmogorov complexity of a Turing machine is large enough.

That is to say, from the perspective of algorithmic information theory, although we can determine that as the system becomes larger, more new laws can emerge, when the system reaches a certain size, we cannot calculate in advance when new laws will emerge as the system reaches a certain size, and we cannot even prove that a new law will emerge when the system reaches a certain size.

When we position the considered system as AI systems such as LLMs, we will find that from the perspective of algorithmic information theory, these systems inherently possess the "scaling law" of "the larger the parameter space, the more capabilities can emerge". Especially when we optimize the system from a random character system to a system with inherent learning capabilities such as artificial neural networks, the emergence of capabilities will in principle be more pronounced and powerful than the above-mentioned random systems. However, similarly, algorithmic information theory still holds in such systems, and we still cannot have a sufficient prior description of the capabilities before they emerge.

##	References

1.	Gregory J. Chaitin (Jul 1974). "Information-theoretic limitations of formal systems". Journal of the ACM. 21 (3): 403–434.
2.	Chaitin, G.; Arslanov, A.; Calude, Cristian S. (1995-09-01). "Program-size Complexity Computes the Halting Problem". Bull. EATCS.
3.	Calude, Cristian S.; Hertling, Peter H.; Khoussainov, Bakhadyr; Wang, Yongge (1998), "Recursively Enumerable Reals and Chaitin Ω numbers", STACS 98, vol. 1373, Springer Berlin Heidelberg, pp. 596–606.
4.	Kolmogorov, Andrey (1963). "On Tables of Random Numbers". Sankhyā Ser. A. 25: 369–375. MR 0178484.
5.	Kolmogorov, Andrey (1998). "On Tables of Random Numbers". Theoretical Computer Science. 207 (2): 387–395.
6.	Kolmogorov, A.N. (1965). "Three Approaches to the Quantitative Definition of Information". Problems Inform. Transmission. 1 (1): 1–7.
7.	Li, Ming; Vitányi, Paul (2008). "An Introduction to Kolmogorov Complexity and Its Applications". Texts in Computer Science. Exercise 2.7.7.
8.	Solomonoff, Ray (March 1964). "A Formal Theory of Inductive Inference Part I". Information and Control. 7 (1): 1–22.
9.	Solomonoff, Ray (June 1964). "A Formal Theory of Inductive Inference Part II". Information and Control. 7 (2): 224–254.
10.	Hutter, Marcus (2007-03-06). "Algorithmic information theory". Scholarpedia. 2 (3): 2519.

<script src="scripts/extension.js"></script>
<script src="scripts/dehead.js"></script>