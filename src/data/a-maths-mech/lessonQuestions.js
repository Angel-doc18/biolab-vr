// Extra questions for the end of the A Level Mechanics and Probability
// lessons (0765), so that every lesson ends with at least five questions on
// what it teaches. g = 9.8 m s⁻².
//
// Convention: the correct option is written first; options are shuffled when shown.

const Q = (q, a, why) => ({ q, a, why });

export const LESSON_QUESTIONS = {
  'me-stat-1': [
    Q('Forces of 3 N and 4 N act at right angles. Their resultant is:', ['5 N', '7 N', '1 N', '12 N'], '√(9 + 16).'),
    Q('The normal reaction on a body resting on a surface acts:', ['at right angles to the surface', 'along the surface', 'vertically downwards', 'along the string'], 'It is the push of the surface.'),
    Q('Three forces in equilibrium can be drawn as:', ['a closed triangle', 'a straight line', 'a circle', 'two parallel lines'], 'The triangle of forces.'),
  ],
  'me-stat-2': [
    Q('The SI unit of moment is:', ['N m', 'N', 'J s', 'kg m'], 'Force × distance.'),
    Q('A uniform 2 m plank of weight 100 N rests on supports at its ends. Each support pushes up with:', ['50 N', '100 N', '200 N', '25 N'], 'By symmetry.'),
    Q('Varignon’s theorem says that the moment of a force equals:', ['the sum of the moments of its components', 'the force × its length', 'zero for a couple', 'the moment of the weight'], 'Moments can be found from components.'),
  ],
  'me-stat-3': [
    Q('A spring of modulus 60 N and natural length 0.4 m has stiffness:', ['150 N m⁻¹', '24 N m⁻¹', '60 N m⁻¹', '0.4 N m⁻¹'], 'k = λ/l.'),
    Q('An elastic string shorter than its natural length has tension:', ['zero', 'λ', 'its weight', 'negative'], 'It goes slack.'),
    Q('The energy stored in a string of modulus 40 N, natural length 2 m, extended by 0.5 m is:', ['2.5 J', '10 J', '5 J', '20 J'], 'λx²/(2l) = 40 × 0.25 ÷ 4.'),
  ],
  'me-com-1': [
    Q('A uniform semicircular lamina of radius r has its centre of mass from the straight edge at:', ['4r/(3π)', 'r/2', '3r/8', 'r/3'], 'A standard result.'),
    Q('Particles of 2 kg at (1, 0) and 2 kg at (5, 4) have their centre of mass at:', ['(3, 2)', '(6, 4)', '(2, 2)', '(3, 4)'], 'The mid-point, for equal masses.'),
    Q('For a uniform lamina, the mass of each part is taken in proportion to its:', ['area', 'perimeter', 'height', 'distance from O'], 'Same thickness and density.'),
  ],
  'me-com-2': [
    Q('A block on a rough plane is pushed up the slope. Friction acts:', ['down the slope', 'up the slope', 'at right angles to it', 'vertically'], 'It opposes the motion.'),
    Q('On a plane inclined at α, R = mg cos α when:', ['no other force acts across the slope', 'the plane is smooth only', 'the block is sliding', 'α = 45°'], 'Resolve at right angles to the plane.'),
    Q('If μ = 0.5, the angle of friction is:', ['26.6°', '30°', '45°', '60°'], 'tan λ = 0.5.'),
  ],
  'me-com-3': [
    Q('For a uniform ladder on rough ground against a smooth wall, it slips when tan θ falls to:', ['1/(2μ)', 'μ', '2μ', '1/μ'], 'From moments about the foot.'),
    Q('A tall, narrow block on a rough slope is likely to:', ['topple before it slides', 'slide before it topples', 'never move', 'roll'], 'Its weight soon passes outside its narrow base.'),
    Q('Taking moments about the foot of a ladder removes:', ['the friction and the reaction at the foot', 'the weight', 'the reaction of the wall', 'nothing'], 'They act through that point.'),
  ],
  'me-kin-1': [
    Q('s = ut + ½at² with u = 0, a = 2, t = 3 gives:', ['9 m', '6 m', '18 m', '3 m'], '½ × 2 × 9.'),
    Q('A horizontal line on a velocity–time graph means:', ['constant velocity', 'constant acceleration', 'the body is at rest', 'it is slowing down'], 'The gradient is zero.'),
    Q('A stone thrown up returns to its starting point. Its displacement is then:', ['zero', 'twice the height', 'the height', 'negative'], 'It is back where it started.'),
  ],
  'me-kin-2': [
    Q('If v = 4t − t², the particle is at rest at:', ['t = 0 and t = 4', 't = 2 only', 't = 4 only', 't = 1'], 't(4 − t) = 0.'),
    Q('If a = 2t and v = 1 at t = 0, then v =', ['t² + 1', '2t + 1', 't²', '2'], 'Integrate and use the starting value.'),
    Q('a = v dv/dx follows from:', ['the chain rule', 'Newton’s third law', 'the trapezium rule', 'Hooke’s law'], 'dv/dt = (dv/dx)(dx/dt).'),
  ],
  'me-kin-3': [
    Q('If v = 3i + 4j m s⁻¹, the speed is:', ['5 m s⁻¹', '7 m s⁻¹', '1 m s⁻¹', '12 m s⁻¹'], '√(9 + 16).'),
    Q('If r = t² i + 2t j, the particle moves on:', ['the parabola y² = 4x', 'a circle', 'a straight line', 'the line y = 2x'], 'x = t², y = 2t.'),
    Q('A particle moves parallel to i when:', ['the j-component of its velocity is zero', 'its speed is zero', 'its i-component is zero', 'its acceleration is zero'], 'Only the i-component remains.'),
  ],
  'me-proj-1': [
    Q('A projectile at 20 m s⁻¹ and 30° has horizontal velocity:', ['17.3 m s⁻¹', '10 m s⁻¹', '20 m s⁻¹', '11.5 m s⁻¹'], '20 cos 30°.'),
    Q('If the speed of projection is doubled at the same angle, the range is multiplied by:', ['4', '2', '½', '8'], 'R is proportional to u².'),
    Q('At the top of its path, a projectile’s speed is:', ['u cos α', 'zero', 'u', 'u sin α'], 'Only the horizontal component remains.'),
  ],
  'me-proj-2': [
    Q('The equation of a trajectory comes from eliminating:', ['t', 'g', 'u', 'α'], 'Using t = x/(u cos α).'),
    Q('A stone thrown horizontally at 12 m s⁻¹ lands after 2 s. It lands from the foot of the cliff at:', ['24 m', '12 m', '6 m', '19.6 m'], 'x = 12 × 2.'),
    Q('For a target on level ground within range, the number of possible angles is usually:', ['2', '1', '3', '4'], 'A low and a high one.'),
  ],
  'me-rel-1': [
    Q('Rain falls vertically at 4 m s⁻¹ and a cyclist rides at 3 m s⁻¹. The rain’s speed relative to the cyclist is:', ['5 m s⁻¹', '7 m s⁻¹', '1 m s⁻¹', '4 m s⁻¹'], '√(16 + 9).'),
    Q('For a boat to land directly opposite, it must head:', ['partly upstream', 'directly across', 'downstream', 'along the bank'], 'To cancel the current.'),
    Q('The position of B relative to A is:', ['r_B − r_A', 'r_A − r_B', 'r_A + r_B', 'r_A × r_B'], 'The vector from A to B.'),
  ],
  'me-circ-1': [
    Q('A body moves in a circle of radius 2 m at 4 m s⁻¹. Its acceleration is:', ['8 m s⁻² towards the centre', '2 m s⁻²', '8 m s⁻² outwards', '0'], 'v²/r = 16/2.'),
    Q('The period of motion with ω = π rad s⁻¹ is:', ['2 s', 'π s', '1 s', '0.5 s'], 'T = 2π/ω.'),
    Q('In a conical pendulum, as ω increases, the string:', ['rises further from the vertical', 'becomes vertical', 'stays at the same angle', 'goes slack'], 'cos θ = g/(lω²) decreases.'),
  ],
  'me-newt-1': [
    Q('A 60 kg person in a lift accelerating downwards at 1 m s⁻² is pushed by the floor with:', ['528 N', '648 N', '588 N', '60 N'], 'R = m(g − a) = 60 × 8.8.'),
    Q('A particle slides down a smooth slope at 30°. Its acceleration is:', ['4.9 m s⁻²', '9.8 m s⁻²', '8.5 m s⁻²', '0'], 'g sin 30°.'),
    Q('A body moving at constant velocity has resultant force:', ['zero', 'equal to its weight', 'in its direction of motion', 'equal to ma with a = v'], 'Newton’s first law.'),
  ],
  'me-newt-2': [
    Q('Masses of 5 kg and 3 kg hang over a smooth pulley. The tension is:', ['36.75 N', '29.4 N', '49 N', '78.4 N'], '2 × 5 × 3 × 9.8 ÷ 8.'),
    Q('The force on the axle of a smooth pulley with tension T in both vertical strings is:', ['2T', 'T', 'T/2', '0'], 'Both strings pull down.'),
    Q('When the hanging particle hits the ground, the particle on a smooth table:', ['moves on at constant speed', 'stops at once', 'speeds up', 'moves backwards'], 'No horizontal force remains.'),
  ],
  'me-wep-1': [
    Q('A 10 kg mass falls 5 m from rest. Its kinetic energy is then:', ['490 J', '50 J', '98 J', '245 J'], 'mgh = 10 × 9.8 × 5.'),
    Q('Work done against friction becomes:', ['heat (and sound)', 'kinetic energy', 'potential energy', 'momentum'], 'It is lost from mechanical energy.'),
    Q('A force at right angles to the motion does work:', ['zero', 'Fs', 'F/s', '½Fs'], 'cos 90° = 0.'),
  ],
  'me-wep-2': [
    Q('A car works at 24 kW at 12 m s⁻¹. The driving force is:', ['2000 N', '288 kN', '200 N', '2 N'], 'F = P/v.'),
    Q('Raising 50 kg through 4 m in 10 s needs an average power of:', ['196 W', '1960 W', '20 W', '49 W'], 'mgh ÷ t.'),
    Q('Driving up a hill at constant speed, the driving force must equal:', ['the resistance + mg sin α', 'the resistance only', 'mg', 'zero'], 'No acceleration.'),
  ],
  'me-mom-1': [
    Q('A gun of mass 2 kg fires a 0.01 kg bullet at 400 m s⁻¹. The gun recoils at:', ['2 m s⁻¹', '4 m s⁻¹', '0.5 m s⁻¹', '400 m s⁻¹'], 'Momentum: 0.01 × 400 = 2v.'),
    Q('The unit N s is the same as:', ['kg m s⁻¹', 'J', 'W', 'kg m s⁻²'], 'Units of momentum.'),
    Q('When bodies coalesce, kinetic energy:', ['is lost', 'is conserved', 'increases', 'is zero'], 'Some becomes heat and sound.'),
  ],
  'me-mom-2': [
    Q('A sphere at 8 m s⁻¹ hits an identical sphere at rest with e = 1. Afterwards:', ['the first stops and the second moves at 8 m s⁻¹', 'both move at 4 m s⁻¹', 'both stop', 'the first rebounds at 8 m s⁻¹'], 'Equal masses exchange velocities.'),
    Q('Speeds of approach 10 m s⁻¹ and separation 4 m s⁻¹ mean e =', ['0.4', '2.5', '0.6', '4'], 'e = 4/10.'),
    Q('e = 0 means the bodies:', ['coalesce', 'bounce apart fully', 'pass through each other', 'stop at once'], 'No separation.'),
  ],
  'me-prob-1': [
    Q('A card is drawn from a pack of 52. P(king or heart) is:', ['16/52', '17/52', '4/52', '13/52'], '4 + 13 − 1 = 16.'),
    Q('If P(A) = 0.35, then P(A′) =', ['0.65', '0.35', '1.35', '0'], '1 − 0.35.'),
    Q('Events that together cover the whole sample space are:', ['exhaustive', 'exclusive', 'independent', 'conditional'], 'Their union is S.'),
  ],
  'me-prob-2': [
    Q('P(A ∩ B) = 0.12 and P(B) = 0.4. Then P(A | B) =', ['0.3', '0.048', '0.52', '0.28'], '0.12 ÷ 0.4.'),
    Q('Drawing with replacement makes the draws:', ['independent', 'mutually exclusive', 'impossible', 'conditional on each other'], 'The pack is restored each time.'),
    Q('In the law of total probability, the events Bᵢ must be:', ['exclusive and exhaustive', 'independent', 'equally likely', 'complementary to A'], 'They split the sample space.'),
  ],
  'me-u6-paper1': [
    Q('Before writing equations in mechanics you should:', ['draw and label a force diagram', 'find the answer', 'use energy at once', 'ignore friction'], 'Every force must be shown.'),
    Q('Friction must be drawn:', ['opposite to the motion or likely motion', 'down every slope', 'upwards', 'along the string'], 'It opposes slipping.'),
    Q('Writing "by conservation of momentum" before an equation:', ['states the principle, which earns credit', 'is not needed', 'loses marks', 'replaces the working'], 'Examiners look for the method.'),
  ],
  'me-u6-paper2': [
    Q('A ball projected at 20 m s⁻¹ passes a point 10 m up with speed:', ['14.3 m s⁻¹', '20 m s⁻¹', '10 m s⁻¹', '6.4 m s⁻¹'], 'v² = 400 − 196.'),
    Q('In a tree diagram for two draws without replacement, the second-stage probabilities are:', ['conditional on the first draw', 'the same as the first', 'all ½', 'added to the first'], 'The pack has changed.'),
    Q('An answer of 0.0582 to 3 significant figures is written:', ['0.0582', '0.058', '0.06', '0.05820'], 'Leading zeros do not count.'),
  ],
};
