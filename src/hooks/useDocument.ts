import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

import { db } from '../database/firestore';

export const useDocument = (docName: string) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetch = async () => {
      const docRef = doc(db, 'expenses', docName);
      const data = (await getDoc(docRef)).data();

      if (data) setData(data);
    };

    fetch();
  }, [docName]);

  return {
    data,
  };
};
