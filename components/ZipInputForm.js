export default function ZipInputForm({ onSubmit, zip, buttonText, className, onChange }) {
  return (<form onSubmit={onSubmit} className={className}>
    <label>
      <input type="text" name="zip" defaultValue={zip} onChange={onChange} />
    </label>
    <button type="submit">{buttonText}</button>
  </form>)
}