import { Html, useProgress } from "@react-three/drei"

const CanvasLoader = () => {
    const { progress } = useProgress();

    return (
    <Html
        as="div"
        center
        style={
            {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }
        }
    >
            <p style={{
                fontSize: 14, color: '#fccee8c3', marginTop: 40, fontWeight: 600,
            }}>
                {progress !== 0 ? `${progress.toFixed(2)}%` : 'Loading'}
            </p>
    </Html>
  )
}

export default CanvasLoader