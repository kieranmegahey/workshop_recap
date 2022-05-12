import pg from "pg";

const pool = new pg.Pool({
  user: "ymyjonqvjavhpw",
  host: "ec2-176-34-211-0.eu-west-1.compute.amazonaws.com",
  database: "d6sl10o60l31is",
  password: "56525d6f47608f7dadc3e5f38e339663cabb0a179328cc2404eee51a350387ec",
  port: 5432,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
