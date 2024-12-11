import { 
    db, 
    doc, 
    getDoc, 
    getDocs, 
    collection, 
    updateDoc, 
    deleteDoc, 
    addDoc, 
    query, 
    where, 
    onSnapshot 
  } from "./config";
  
  const collectionName = 'productos';
  
  // Create item
  export const createItem = async (obj) => {
    const colRef = collection(db, collectionName);
    const data = await addDoc(colRef, obj);
    return data.id;
  };
  
  // Read item by ID
  export const getItem = async (id) => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error("No such document!");
    }
  };
  
  // Read all items
  export const getAllItems = async () => {
    const colRef = collection(db, collectionName);
    const querySnapshot = await getDocs(colRef);
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  };
  
  // Update item by ID
  export const updateItem = async (id, obj) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, obj);
    return true;
  };
  
  // Delete item by ID
  export const deleteItem = async (id) => {
    try {
      const docRef = doc(db, collectionName, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(`El documento con ID: ${id} existe, procediendo a eliminar`);
        await deleteDoc(docRef);
        console.log(`Documento con ID: ${id} eliminado exitosamente`);
        return true;
      } else {
        console.error(`El documento con ID: ${id} no existe`);
        return false;
      }
    } catch (error) {
      console.error(`Error al eliminar el documento con ID: ${id}`, error);
      return false;
    }
  };
  
  // Query items
  export const queryItems = async (field, condition, value) => {
    const colRef = collection(db, collectionName);
    const q = query(colRef, where(field, condition, value));
    const querySnapshot = await getDocs(q);
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  };
  
  // Listen to real-time updates
  export const listenToUpdates = (callback) => {
    const colRef = collection(db, collectionName);
    return onSnapshot(colRef, (snapshot) => {
      const items = [];
      snapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      callback(items);
    });
  };
  