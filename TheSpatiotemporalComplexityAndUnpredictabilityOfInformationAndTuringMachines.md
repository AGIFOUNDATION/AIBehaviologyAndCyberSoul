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

#	The Spatiotemporal Complexity and Unpredictability Of Information And TuringMachines

##	Several Variations of Turing Machines

The traditional Turing machine can be formally defined as follows:

$$
T = \left< Q, q_0, F, \Gamma, b, \Sigma, \delta\right>
$$

Where:

- $Q$ is the set of internal states, consisting of a non-empty finite set of states;
- $q_0\in Q$ is the initial state;
- $F \subseteq Q$ is the set of accepting states or final states;
- $\Gamma$ is a non-empty finite alphabet;
- $b$ is an element of $\Gamma$, uniquely representing blank content;
- $\Sigma\subseteq\Gamma\backslash \\{b\\}$ is the input alphabet;
- $\delta : \left( Q \backslash F \right) \times\Gamma\nrightarrow Q \times\Gamma\times \\{L, R\\}$ is a partial function called the "transition function", where $L$ indicates the read-write head moves one position left, and $R$ indicates it moves one position right.

Since $\delta$ is a partial function, there exists a situation where a specific state $\left< q \in Q, \gamma\in\Gamma\right>$ is not in the domain of $\delta$, i.e., "undefined", in which case the system enters a "rejection" state.

It is not difficult to prove that this traditional 7-element definition can be extended to an 8-element definition as follows:

$$
T = \left< Q, q_0, F, n, \Gamma, b, \Sigma, \delta\right>
$$

The newly added $n$ represents the position of the "read-write head" on the "tape", which is obviously a natural number (or an integer for a two-way unbounded Turing machine model). Accordingly, the transition function is adjusted to:

$$
\delta : \left( Q \backslash F \right) \times\Gamma\times N \nrightarrow Q \times\Gamma\times N
$$

The Turing machines under these two definitions are completely equivalent in computational power, meaning the latter can fully simulate the former, and the former can also fully simulate the latter.

> It is very obvious for the latter to simulate the former, while it is relatively more complex for the former to simulate the latter. However, we can add two new states to the state space, one marking whether the current state is a read-write head movement state or an execution state, and the other marking how many positions are left to the target read-write position, with negative values for left and positive for right. With these additional state identifiers, we can use the former to simulate the latter.

After completing this transformation, the next transformation becomes natural: we "compress" the 8-element set back to 7 elements, but only the definition of the transition function is adjusted from the initial definition:

$$
\delta : \left( Q \backslash F \right) \times\Gamma^* \nrightarrow Q \times\Gamma^*
$$

Here $\Gamma^*$ is the power set of alphabet $\Gamma$, representing the set of all finite-length strings composed of elements from $\Gamma$.

Once again, this model has exactly the same computational power as the above two models, and the three can simulate each other.

> It is very easy for the third model to simulate the previous two, while to use the original definition to simulate the third model, we only need to prove that the 8-element model can simulate this new model. The method is actually quite simple: add a state space area that records the target string to be written to the entire "tape" space, then first adjust the output read-write head position to 1 (or 0, this is not important), and then output the corresponding character on the string for each step of movement. If it's a two-way infinite model, since any integer can be mapped to a natural number, it's essentially the same, except that the read-write head position will be a bit more complex. Such simulation holds for any finite-length string, but obviously not for infinite-length strings, so we require here that $\Gamma^*$ is a set composed of finite-length strings.

> There is an interesting mapping relationship here: if we view the read-write head as a "particle", view $Q$ as the intrinsic state of the particle such as momentum, spin, isospin, or even mass, charge, color charge, etc., and view the tape as a discrete space, and the characters $\Gamma$ on the tape as fiber bundles at that spacetime position, then the particle motion on such a discrete space can be viewed as a multi-dimensional tape Turing machine (with computational power still equal to a traditional Turing machine), and the multi-particle case is a multi-read-write Turing machine.

Since both $Q$ and $\Gamma$ are finite non-empty sets, $Q \times\Gamma^*$ is a countable set, so it can be mapped to the set of natural numbers $N$, in other words, the above transition function is equivalent to a partial function $f : N \nrightarrow N$.

Since a Turing machine starts from an initial state $\left< q \in Q, s \in\Gamma^* \right>$ and continuously applies the transition function until a certain state $\left< q \in Q, s \in\Gamma^* \right>_t$, where this state is either undefined for the transition function or $q \in F$, and $t$ represents applying the transition function $t$ times, the Turing machine itself can also be written as $T : \left( Q \backslash F \right) \times\Gamma^* \nrightarrow F \times\Gamma^*$

Since the transition function is a partial function from natural numbers to natural numbers, and the number of times the transition function is applied is a natural number, it's not difficult to see that the Turing machine itself must also be a partial function from natural numbers to natural numbers.

We denote the set of all partial functions mapping the set of natural numbers to the set of natural numbers as $\mathfrak{F}$, then obviously $\left\\{ T \right\\} \subset \mathfrak{F}$.

A very obvious example that belongs to $\mathfrak{F}$ but not to $\\{T\\}$ is the halting problem decision function, which maps the i-th Turing machine (under any ordering) to $\\{0,1\\}$, where 0 indicates it will not halt and 1 indicates it will halt. Since this function definitely exists, it is obviously an element of $\mathfrak{F}$; and it is obviously not computable because the halting problem for Turing machines is not computable, so it is obviously not an element of $\\{T\\}$.

So, if we use an element from $\mathfrak{F} \backslash \\{T\\}$ as the transition function to construct a Turing machine, can we obtain "higher computational power"? That is actually an Oracle Machine, where the part of the newly added transition function that cannot be expressed by $\\{T\\}$ is equivalent to an added "oracle", and the computational power of the new model has completed a "Turing jump" relative to the Turing machine.

Therefore, after the above transformations, we have actually transformed the Turing machine into something like this:

$$
T = \left< t, c \right>
$$

Where:

- $t : N \nrightarrow N$ is the state transition function (partial function), or now can be called the "basic operator";
- $c : N \rightarrow \\{0, 1\\}$ is the "termination judgment", satisfying $c(t^{n < n_0}(s)) = 0\land c(t^{n \ge n_0}(s)) = 1$

We no longer distinguish between state space and character set, as they are now unified and mapped to the set of natural numbers. We can further require:

$$
t(s) = \begin{cases}
\emptyset & s \not\in\mathrm{def}(t) \\
s' \neq s & c(s) = 0\\
s & c(s) = 1
\end{cases}
$$

##	Dynamics and Unpredictability of Turing Machines

Let's now focus on the basic operator $t$ of the Turing machine $T = \left< t, c \right>$ represented by the above pair. Its function, as defined earlier, is a partial function mapping natural numbers to natural numbers.

Therefore, starting from any given natural number $s$, we take the sequence $\\{t^n(s)\\}$. This sequence is either finite, corresponding to some natural number $n$ making $t^n(s)$ undefined for $t$; or the sequence eventually stabilizes at some value; or the sequence continues indefinitely without ever stabilizing.

In fact, the first case can be included in the second case. For example, we can wrap another Turing machine around the original one, which directly halts in an accepting state and outputs 0 when it finds that the target Turing machine's state is rejecting, and only outputs 0 when the internal Turing machine reaches a rejecting state.

Therefore, for any given natural number, the sequence generated by repeatedly applying the basic operator either stabilizes at a specific value or changes infinitely and never stabilizes.

Thus, Rice's theorem actually states: **The task of determining whether the sequence $\\{t^n(s)\\}$ starting from any natural number $s$ for any basic operator $t$ has a specific pattern is not computable.**

Or we can put it another way: **If a computable algorithm can determine whether the sequence $\\{t^n(s)\\}$ satisfies a specified non-trivial decision function $F(t^{N+C}(s)) = 1$ after $C$ terms based on the first $N$ terms of the sequence, then this algorithm cannot hold for any basic operator $t$ and natural number $s$, where $C$ is a constant only related to $t$.**

Let's now consider a multi-read-write head system, that is, an initial set of points $S$, which forms a set of points $\\{t^n(S)\\}$ that changes with "time" under the action of the basic operator. Then we can make a similar assertion: **There does not exist a computable universal algorithm to determine whether any such set of points can satisfy any specified non-trivial condition in a configuration after a time duration only related to the basic operator.**

This means that universal predictability does not exist here. For a system complex enough (to the extent that it can accommodate a universal Turing machine, or in terms of structured program theorem, complex enough to accommodate several basic operations), there exists a predictability time limit only related to the complexity of the system itself, and predictions beyond this limit are impossible.

This unpredictability is stronger than the Lyapunov limit of complex systems. The latter stems from the chaotic nature of the system or its sensitivity to initial values, while the unpredictability here stems from the limits of computability.

##	Space-Time Complexity of Information

We now define a Turing machine as a triple: $T = \left< t, c, q \right>$, where $t$ is the basic operator mentioned above, $c$ is the termination judgment, and $q$ is the initial internal state (i.e., $Q \backslash F$). Hereafter, when we discuss different Turing machines, we agree that $t$ and $c$ are the same while $q$ differs for different Turing machines, so $q$ is called the "Turing number" corresponding to the Turing machine $T$.

Thus, for any natural number $s$ (note that it can also be viewed as the target output string $s \in\Gamma^*$, because any finite-length string composed of finite characters can be mapped to a natural number), there must exist such a mapping:

$$
T (r) = t^{n}(r, q) = s
$$

Where $r$ is the input natural number (i.e., string). Such mapping may not be unique, that is, there may exist different $n_i$, $r_i$, and $q_i$ that satisfy the above equation. Therefore, we can take the following two quantities:

$$
\begin{align}
K(s) &= \inf_{t^{n}(r, q) = s} \Vert r \Vert + \Vert q \Vert\\
E(s) &= \inf_{t^{n}(r, q) = s} n
\end{align}
$$

Here $\Vert\cdot\Vert$ is a measure, we generally use $\Vert s \Vert = \left\lceil\log_d s \right\rceil$, where $d$ is the size of the alphabet.

The former is called the **space scale** of the natural number (or string) $s$, and the latter is the **time scale**. Obviously, the space scale is a function of the incompressible length, or algorithmic complexity. Therefore, for sufficiently large $s$, the corresponding $K(s)$ is obviously existent, definite, but not computable.

On the other hand, $E(s)$ doesn't have much significance for a single target string, because it's always possible to make $n$ as small as possible by choosing the input $q$, and eventually $E(s)$ will become a constant only related to the initial state $q$ and unrelated to the target output natural number (in traditional Turing machine language, it's only related to the enumerable language traversed by the chosen universal Turing machine and unrelated to the target output string).

> For example, the following pseudo-code:
> ```
> fun output = () =>
>   return "OUTPUT"
> ```
> Obviously, no matter what the input is, it always outputs the fixed string `OUTPUT`, so `E(OUTPUT)=1`, and this result has nothing to do with what `OUTPUT` actually is.

Next, we consider two numbers $r$ and $s$, and there exists a Turing machine $T$ such that $T(r) = t^n(r, q) s$. This way we can define the "space interval" between these two numbers as:

$$
\Vert r, s \Vert = \inf_{t^n (r, q) = s} \Vert q \Vert
$$

If there is no Turing machine such that $T(r) = s$, then we denote $\Vert r, s \Vert = \infty$. Meanwhile, we denote the Turing number $q_{r,s}$ satisfying $\Vert q_{r,s} \Vert = \Vert r, s \Vert$ as the "shortest (directed) path" connecting from $r$ to $s$. Obviously, the space interval is non-commutative: $\Vert r, s \Vert\neq\Vert s, r \Vert$, and the shortest path may not be unique.

With the shortest path, we can define the "time interval" from $r$ to $s$:

$$
\lgroup r, s \rgroup = \inf_{q \in \{ q_{r,s} \}} n
$$

In this sense, the time interval is obviously only an appendage of the space interval.

Although $E(s)$ doesn't have non-trivial meaning for a single target natural number, if we consider a set composed of a group of inputs and outputs, the situation becomes interesting: for the input set $\\{I_i\\}$ and output set $\\{O_i\\}$, and require that there exists a Turing machine satisfying $\forall i : T(I_i) = O_i$, then we can calculate the following function:

$$
E \left( \{ I_i \}, \{ O_i \} \right) = \max_i\inf_{\forall q : t^{n}(I_i, q) = O_i} n
$$

Note that here the Turing number $q$ is required to be the same for all input-output pairs. This function is no longer a constant only related to the choice of language, but a function related to the set of input-output pairs, and as long as the input and output sets themselves are large enough, it is not computable.

We can consider this function as measuring the "time interval" from one set to another, and this interval does not decrease as the input-output pair set increases. Correspondingly, we can also define the "space interval" between two natural numbers and further define the space interval between two sets:

$$
\begin{align}
K(i, o) &= \inf_{\forall q : t^n(i, q) = o} \Vert q \Vert\\
K \left( \{ I_i \}, \{ O_i \} \right) &= \sum_i K(I_i, O_i)
\end{align}
$$

In other words, spatial scale and spatial interval $K$ can be defined on individual natural numbers and pairs of natural numbers, while temporal scale $E$ can only be defined on a set of input-output pairs. They are collectively referred to as "**spatiotemporal complexity**".

In addition to defining spatiotemporal complexity on individual natural numbers and sets of input-output pairs, we can also define the spatiotemporal complexity of a single Turing mapping (the natural number mapping corresponding to a Turing machine).

We first define $\mathrm{acc}(q)$ as the set of natural numbers $s$ for which there exists a finite natural number $n$ such that $c(t^n(s, q)) = 1$, and $\mathrm{fin}(q) = \\{t^n(s, q) \| \exists n \in N : c(t^n(s, q)) = 1 \\}$. This allows us to define the spatiotemporal complexity of a Turing machine, or rather its corresponding Turing number $q$:

$$
\begin{align}
K(q) &= \sum_{s \in \mathrm{acc}(q)} K(t^n(s, q)) - K(s)\\
E(q) &= E \left( \mathrm{acc}(q), \mathrm{fin}(q) \right)\\
\Delta (q) &= \Vert q \Vert - K \left( \mathrm{acc}(q), \mathrm{fin}(q) \right)
\end{align}
$$

Obviously, the first equation represents spatial complexity, which can be positive or negative, measuring whether the data becomes more complex or simpler after mapping; the second equation measures the "temporal distance" between the two data sets before and after mapping; the third equation is called the "complexity deviation", satisfying $\Delta (q) \ge 0$, measuring the degree to which the Turing machine deviates from the most concise Turing mapping.

When we discuss the complexity of information, or the degree of information processing by a system, $K(q)$ is clearly more appropriate; when we discuss whether the system itself is sufficiently concise, it is suitable to use $\Delta(q)$; finally, when we discuss the speed of system operation, $E(q)$ is most appropriate.

##	Summary

Through several interesting equivalent transformations of Turing machines, we discussed some basic properties of Turing machines and information, including the temporal and spatial complexity between two data sets, as well as some methods to measure system complexity. We pointed out that as long as a system is sufficiently complex, its predictability has limits, and these limits are related only to system complexity and not to the initial value sensitivity represented by chaos.




<script src="scripts/extension.js"></script>
<script src="scripts/dehead.js"></script>