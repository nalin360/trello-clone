import { useState } from 'react';
import axios from 'axios'; // Import Axios

const useCreateBoard = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newBoard, setNewBoard] = useState(null);
    const [boardId, setBoardId] = useState(initialBoardId);
    const [workItems, setWorkItems] = useState([]);


    const createBoard = async (boardName) => {
        setLoading(true);
        setError(null);
        try {
            // Use axios.post instead of fetch
            const response = await axios.post('/boards', { boardName });
            setNewBoard(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    const fetchWorkItems = async (boardId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`/boards/${boardId}/work`); // Use axios.get
            setWorkItems(response.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const createWorkItem = async (workType, title, content) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`/boards/${boardId}/work/${workType}`, { title, content }); // Use axios.post
            setWorkItems([...workItems, response.data]);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { createBoard, loading, error, newBoard , boardId,
        setBoardId,
        workItems,
        loading,
        error,
        createWorkItem,};
};

export default useCreateBoard;
