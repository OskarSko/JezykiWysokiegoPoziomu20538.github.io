import Image from 'next/image';

export default function CommunityPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  const posts = [
    {
      id: 1,
      title: 'Favorite Meals Discussion',
      image: `${basePath}/images/burger.jpg`,
      description: 'Share your favorite burger recipes and tips!',
    },
    {
      id: 2,
      title: 'Healthy Eating Tips',
      image: `${basePath}/images/tomato-salad.jpg`,
      description: 'Let’s talk about fresh and healthy tomato salads.',
    },
    {
      id: 3,
      title: 'The Best Pizzas',
      image: `${basePath}/images/pizza.jpg`,
      description: 'Post your favorite pizza toppings and recipes!',
    },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Community Page</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={120}
              height={80}
              style={{ borderRadius: '8px' }}
            />
            <div>
              <h2 style={{ margin: '0', fontSize: '1.2rem' }}>{post.title}</h2>
              <p style={{ margin: '0.5rem 0 0', color: '#555' }}>
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
