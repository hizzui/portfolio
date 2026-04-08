// API Services - Placeholder para comunicação com backend

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const fetchGitHubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('Failed to fetch GitHub user');
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
};

export const fetchGitHubRepos = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) throw new Error('Failed to fetch GitHub repos');
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};

export const fetchPortfolioData = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio`);
    if (!response.ok) throw new Error('Failed to fetch portfolio data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return null;
  }
};
