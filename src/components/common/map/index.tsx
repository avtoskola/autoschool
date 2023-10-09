interface Props {
  className?: string;
  id?: string;
}

function Map(props: Props) {
  return <iframe
    id={props.id}
    className={props.className}
    width="600"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Moskovsʹkyy+Ustts+T·sou`}>
  </iframe>;
}
export default Map;
