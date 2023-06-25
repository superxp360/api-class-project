import { db } from "./condectDb.js"

export async function getCars(req, res) {
    const car = await db.collection('cars').get()
        .catch(err => {
            res.status(500).send({success: false, message: err})
            return
        })

        const carArray = car.docs.map(doc => ({id: doc.id, ...doc.data()}))
        res.send(carArray);
}


export async function addNewCar(req, res) {
    const newCar = req.body
    await db.collection('cars').add(newCar)
    .catch(err => {
        res.status(500).send({success: false, message: err})
        return
    })
    getCars(req, res) 
}


export async function updateCar(req, res) {
    const carId = req.params.carId;
    const updateData = req.body;
  
    try {
      await admin.firestore().collection('cars').doc(carId).update(updateData);
      getCars(req, res);
    } catch (error) {
      console.error(error);
      res.status(500).send({ success: false, message: error.message });
    }
  }
