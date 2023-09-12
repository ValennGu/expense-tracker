import { addDoc, collection } from 'firebase/firestore';

import { db } from '../database/firestore';
import { Expense } from '../models/expense';

export const useSaveToFirestore = () => {
  const saveExpense = async (expense: Expense) => {
    try {
      const docRef = await addDoc(collection(db, 'todos'), {
        todo: expense,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return {
    saveExpense,
  };
};
