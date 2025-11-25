import { useCategories } from './hooks/useCategories';
import './App.css';

function App() {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return <div>🔄 Loading categories...</div>;
  }

  if (error) {
    return <div>❌ {error}</div>;
  }

  return (
    <div className="App">
      <h1>🤠 Texas Trailers CR</h1>
      <h2>Categories</h2>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {categories.map(category => (
          <div 
            key={category.id} 
            style={{ 
              border: '1px solid #ccc', 
              padding: '20px', 
              borderRadius: '8px',
              width: '250px'
            }}
          >
            <img 
              src={category.imageUrl} 
              alt={category.name}
              style={{ width: '100%', borderRadius: '4px' }}
            />
            <h3>{category.name}</h3>
            <p>Order: {category.order}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;