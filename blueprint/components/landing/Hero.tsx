import Strands from './Strands';

export default function Homepage() {
  return (
    <section className="flex  items-center justify-center relative mb-0">
<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <Strands
    colors={["#F97316","#7C3AED","#6366f1"]}
    count={3}
    speed={0.5}
    amplitude={1}
    waviness={1}
    thickness={0.7}
    glow={2.6}
    taper={3}
    spread={1}
    intensity={0.6}
    saturation={2}
    opacity={1}
    scale={1.5}
    glass={false}
    refraction={1}
    dispersion={1}
    glassSize={1}
    hueShift={0}
/>
</div>
        <div className='absolute items-center flex inset-0 justify-center'>
        <h2 className='ml-4'>Find Scholarships That Actually Match You.</h2>
        <p className='relative mt-32'>Scholar MatchAI analyzes your academic profile, preferred country <br/>
        and eligibility to recommend scholarships you are most likely to qualify for.
        </p>
      </div>

    </section>
  );
}
