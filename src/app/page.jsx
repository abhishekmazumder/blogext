import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import CategoryList from "@/components/categoryList/CategoryList";

export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
    </div>
  );
}
