import Image from 'next/image';

export default function MealsPage() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  const meals = [
    { name: 'Burger', src: `${basePath}/images/burger.jpg` },
    { name: 'Curry', src: `${basePath}/images/curry.jpg` },
    { name: 'Dumplings', src: `${basePath}/images/dumplings.jpg` },
    { name: 'Mac and Cheese', src: `${basePath}/images/macncheese.jpg` },
    { name: 'Pizza', src: `${basePath}/images/pizza.jpg` },
    { name: 'Schnitzel', src: `${basePath}/images/schnitzel.jpg` },
    { name: 'Tomato Salad', src: `${basePath}/images/tomato-salad.jpg` },
  ];

  return (
    <div>
      <h1>Meals Page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {meals.map((meal, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <Image
              src={meal.src}
              alt={meal.name}
              width={200}
              height={150}
              style={{ borderRadius: '8px' }}
            />
            <p>{meal.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
