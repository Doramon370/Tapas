// server.js
import express from 'express'
import cors from 'cors'
import supabase from './supabaseClient.js'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

// server.js (añádelo arriba de tu POST /api/recoleccion)
app.get('/api/test', async (_, res) => {
  try {
    const { data, error } = await supabase
      .from('recoleccion_tapitas')
      .select('id')
      .limit(1)
    if (error) return res.status(500).send(error.message)
    res.json(data)
  } catch (err) {
    res.status(500).send(err.message)
  }
})


app.post('/api/recoleccion', async (req, res) => {
  const datos = req.body

  try {
    // Este await puede lanzar el TypeError de undici
    const { data, error } = await supabase
      .from('recoleccion_tapitas')
      .insert([datos])

    if (error) {
      console.error('❌ Supabase insert error:', error)
      return res.status(500).json({ error: error.message })
    }

    console.log('✅ Registro insertado:', data)
    return res.status(200).json({ mensaje: 'Datos insertados con éxito' })

  } catch (err) {
    // Aquí caerán errores de fetch/undici
    console.error('🚨 Network or fetch error:', err)
    return res.status(500).json({ error: err.message })
  }
})

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
)



