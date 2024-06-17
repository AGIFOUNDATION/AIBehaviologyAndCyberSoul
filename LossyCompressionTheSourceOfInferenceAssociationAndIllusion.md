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

#	Lossy Compression: The Source of Association, Illusion, and Maybe Inference

> - Author: [LostAbaddon](lostabaddon@gmail.com)
> - Date: 2024/06/17

##	The Representation Space As an Affine Space

In models such as LLM, we map textual elements like words and sentences to a point in a high-dimensional vector space (usually the vector from the origin to that point is taken as the representation vector of the aforementioned elements, such as word2vec, sentence2vec, and doc2vec, etc.), and map the relationships between these elements as vectors connecting two points.

For example, in the famous example `king - man + woman = queen`, `king`, `man`, `woman`, and `queen` are all points in the vector space (as mentioned before, they can also be seen as vectors), and the relationship `king - man` is the vector from the point `man` to the point `king`. By "applying" this vector to the point `woman`, the same relationship can yield the point `queen`.

In summary, we can refer to this vector space as the semantic representation space, where each token is a point in this space, and the relationship between two tokens is a vector within this space.

Such a representation space \( R \) can be mathematically described as an affine space, not just a vector space, to emphasize the difference between points and vectors. Our following discussion is based on this point.

##	The Inter-word Relationship Defined as a Probability Field on a Fiber Bundle

In models such as LLM, what we actually end up with is a "vector field," where the same vector has different "probabilities" assigned to it based on the starting position. For example, let `coronation = king - man`, then the probability of the vector `coronation` at `man` is 1, and the probability at `woman` is also 1, but the probability at `king` is much smaller, because a king is generally not crowned twice, but it can be done forcibly: `king + coronation = empire`. What about at `male frog`? Get the Prince Frog? So the probability at `male frog` is even smaller.

Therefore, although `coronation` as a vector can be defined at every point in the space, after learning and training, its probability at each point is not the same, so it is ultimately expressed as a vector field in the representation space, not just a vector. Of course, later we will find that the underlying manifold defined by this probability distribution is more complex than what we see now, and it can be seen as a probability distribution field on some higher-order manifold based on the representation space.

Next, let's consider the generation process of LLM, which can be seen as a Markov process.

For a first-order Markov process, the choice of the next token depends entirely on the current token, and at this time, the probability distribution of the above word relationship vector can be seen as a field defined on the projective bundle of the representation space. For a second-order Markov process, it can actually be seen as defined on the direct product space of two representation spaces, or the second-order direct product space of the representation space, such a manifold's projective bundle of a probability field. An N-order Markov process is a probability field on the projective bundle of the N-order direct product space of the representation space.

Of course, the above geometric expressions cannot essentially simplify the problem, we just need to remember: the word relationship vector is a probability distribution field on a micro-flow manifold composed of a representation space, that's enough.

Next, let's take \( f(\vec x_1, \vec x_2, ... \vec x_n ; \vec V) \) to represent the distribution probability of the word relationship vector \( \vec V \) at a point \( \vec X = \{ \vec x_1 ... \vec x_n \} \) in the N-order direct product space of the representation space with n semantic elements. Then in the generation process of LLM, we naturally expect the probability of the next token to be \( \vec y \) as:

$$
M(\vec X, \vec y) = \frac{f (\vec X, \vec y - \vec x_n)}{\sum_{\vec V \in \mathfrak{V}} f (\vec X, \vec V)}
$$

When we set the parameters to make LLM only return the token with the highest probability, we are selecting the token \( \vec y \) that maximizes the above formula. And even if we do not make LLM only return the token with the highest probability, LLM will in fact truncate all possible word relationship vectors during the generation process, that is, remove all word relationship vectors with a probability less than a certain threshold \( \bar f \). In this way, the denominator of the above formula will be adjusted to: \( \sum_{\vec V \in \mathfrak{V_{X, \bar f}}} f (\vec X, \vec V) \), where the vector set \( \mathfrak{V_{X, \bar f}} \) is a subspace of the projective space on \( \vec X \), and the probability distribution in this subspace is greater than the threshold \( \bar f \).

Since the order of the generation process as a Markov process is fixed, the above process can actually be described as a directed graph: starting from a point in the N-order direct product space of the representation space, several directed edges can be emitted, leading to a set of endpoints, and these directed edges are all assigned a probability distribution value.

##	Task Hypersurface and Projection

Let's now consider another issue.

When we use an appropriate prompt, whether it's a system prompt or a running prompt used in general interaction, or when we fine-tune the LLM, what is happening in the representation space?

When we require the LLM to respond within a limited scope, we are essentially "trimming" the representation space to a subspace. This trimming is not only a contraction in range but also a reduction in dimensions. Thus, the trimmed space is not only a subspace within the direct product space of the representation space but also a hypersurface, a process of dimensionality reduction.

Of course, it is not the case that dimensionality reduction of the representation space will inevitably occur as long as the LLM is completing a task, but rather that dimensionality reduction of the representation space may occur when the LLM is completing a task.

Therefore, when the representation space is trimmed under the influence of a prompt or fine-tuning, we need to consider how semantic element points that are no longer in the trimmed representation space \( T \) should be mapped into \( T \).

A reasonable guess would be to directly make a geodesic that passes through the semantic element point and is orthogonal to the boundary of \( T \), but in actual problems, such an approach is not actually reasonable because "geodesics" in the representation space do not have a well-defined concept. So we can only assume that such a projection to \( T \) exists, but we are currently unclear about the specific details of this projection.

In any case, the projection from semantic element points outside the task hypersurface to the task hypersurface cannot generally be bijective, and thus this projection will inevitably lose some information. Or to put it the other way around, there must be a set of points on the task hypersurface (and it might even be the entire set) that are the common projections of more than one semantic element. That is to say, \( \exists \vec \alpha \in T, \exists \vec x_1, \vec x_2 ... \vec x_i \in R \) satisfying \( P (\vec x_i) = \vec \alpha \), and \( \| \{ \vec x_i \} \| > 1 \).

Now let's consider the word relationship vectors, which are also mapped onto the task hypersurface: \( \vec V' + \vec \alpha = P(\vec V + \vec \alpha) \), meaning it can be seen as the joint operation of the original relationship vector and the projection operator \( \hat {\vec V'} = \hat P \circ \hat {\vec V} \) .

At the same time, we know that the relationship vector is actually a vector field, defined in the projective space of a given point. Since after projection onto the hypersurface, a point on the hypersurface is actually the common projection of multiple points, then at this time the probability distribution of each relationship vector at this projection point is composed of the probability distributions of the same relationship vector from multiple points in the original space:

$$
f_T(\vec \alpha, \vec V) = \sum_{\hat P \circ \hat {\vec Y} = \hat {\vec V}} \left[ \sum_{P (\vec x)= \vec \alpha} f_R(\vec x, \vec Y) \right]
$$

Of course, in actual situations, it may not be a simple additive summation, but we will not discuss this further here.

From a graph theory perspective, this is equivalent to saying that after we project the representation space onto the task hypersurface, multiple points are projected as the same point, so the directed edges that originally had these different points as their starting points are all directed edges starting from the same point in the projected graph.

In other words, **a projected semantic element point on the hypersurface can have more outward connections**, can connect to more points, and reflect more possible tokens.

Just like the projection that maps multiple points to the same point on a hypersurface, thereby increasing outward connections, if for reasons of precision the representation space is gridded, which during the learning and training process causes multiple points to be mapped to the same grid cell, resulting in multiple different points actually being represented by the same point in the representation space, then it will also cause the existence of outward connections that should not have existed.

This also means that in the original Markov process, there is now a situation where the process can go to a connection that did not originally exist, thereby directing the overall semantics in a completely different direction. It's like in a conversation, a person uses a pun to divert the whole topic to another direction.

Therefore, the non-training increase in outward connections manifests in the feedback of LLM as the ability to associate and hallucinate.

That is to say, from the above geometric description, **the ability to associate and hallucination come from the same source**.

If we want to distinguish between association and hallucination, it may be difficult from the training perspective, because it is related to the actual task hypersurface and the projection operator to that hypersurface, and these two, especially the task hypersurface, are not directly related to the training data and training method. Therefore, a more appropriate way may be to further trim the task hypersurface, to trim the hallucinatory space during the actual execution of the task. For example, by introducing more factual data to "trim" away hallucinatory content, which is the solution implemented by RAG.

## Lossy Compression: The Source of Association, Hallucination, and Even Reasoning

From the perspective of Algorithmic Information Theory (AIT), if a target state \( s \) can be generated by a series of Turing machines \( T_i \) with corresponding initial states \( a_i \) such that \( T_i(a_i) = s_i \), and the total data volume of the Turing machines and initial states is smaller than the data volume of the target state itself, then \( T_i(a_i) \) can be said to be a compressed representation of \( s \).

In neural networks, there are two layers of meaning. The first layer refers to the existence of a vector in the representation space that can represent the target state, whether this state is an object in the physical world, a process, or a combination of events, objects, and processes. The second layer of meaning is that several nodes in the network can form an output that maps to the target point in the representation space under the right input conditions.

Any physical entity with finite energy and storage space that wants to process a sufficient number of complex events occurring in the world must inevitably compress information. Moreover, since any physical entity with finite energy cannot process any signal with infinite precision, the loss of information is inevitable. Coupled with the increase in the number of events, a finite physical system will inevitably discard some old information as new information is input, otherwise it will either no longer respond to external stimuli or will have to consider increasing its own information capacity and processing power.

Therefore, we can almost certainly say that any physical entity with finite energy that wants to process events at the scale of the world will inevitably perform lossy compression on the world.

Since it is lossy, it is natural that gridding in the representation space will "accidentally" bind together multiple different semantic nodes.

From this point, it seems very reasonable that lossy compression creates association and hallucination.

So, can this increase in outward connections, in addition to bringing association and hallucination to LLM, also bring an increase in reasoning ability?

It is not hard to imagine that a neural network like LLM can naturally acquire deductive logic, because deductive logic, especially mathematical deductive logic unrelated to semantics, only needs to find the most probable relationship vector based on limited inputs and outputs, which is what neural networks are best at. Therefore, as long as the representation space is large enough, it can be acquired. But we know that reasoning is not only deductive logic in mathematical logic, but also many other categories. And according to our analysis above, analogical logic may appear and be acquired through gridding and projection onto the hypersurface.

Therefore, from this point, compression, even if it is not the source of reasoning ability, has the potential to enhance the system's reasoning ability.

So far, we can roughly say: lossy compression is not a bad thing; on the contrary, it may be precisely the source of many interesting abilities of neural networks such as LLM.




<script src="scripts/extension.js"></script>
<script src="scripts/dehead.js"></script>