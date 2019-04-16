export class Document {

  constructor(
    public doc_id?: string,
    public url?: string,
    public doc_name?: string,
    public can_view?: [string],
    public aws_bucket?: string,
    public aws_key?: string
  ) { }
}
