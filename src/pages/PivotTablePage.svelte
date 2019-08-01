<script>
  import { Link } from "svelte-routing";
  import PivotTable from "../components/PivotTable.svelte";
  import { examples } from "../store";
</script>

<style>
  .pivot-table-page {
    width: 100%;
    height: 100%;
    padding-bottom: 30px;
  }

  .table-container {
    padding: 0 30px 30px 30px;
    /* width: calc(100% - 60px);
    height: calc(100% - 119px); */
  }

  .tables-row {
    display: flex;
    justify-content: space-around;
  }

</style>

<div class="pivot-table-page">

  <header>
    <Link to="/">
      <h1>Table</h1>
    </Link>
  </header>

  <div class="table-container">
    <div class="title">
      <h3>{examples[0].title} Component Example</h3>
    </div>

    <div class="table">
      <PivotTable data={examples[0]} />
    </div>

    <div>
      <h3>First Example HTML</h3>
    </div>

    <table>
      <thead>
        <tr>
          <th />
          <th>Column Labels</th>
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
          <th />
        </tr>
        <tr>
          <th />
          <th>CA</th>
          <th>CO</th>
          <th>FL</th>
          <th>ID</th>
          <th>IL</th>
          <th>NV</th>
          <th>NY</th>
          <th>OR</th>
          <th>TN</th>
          <th>UT</th>
          <th>WA</th>
          <th>WI</th>
          <th>Grand Total</th>
        </tr>
      </thead>

      <tfoot>
        <tr>
          <th>Sum of revenue</th>
          <th>2544.73</th>
          <th>2464.65</th>
          <th>7780.57</th>
          <th>4543</th>
          <th>8278.07</th>
          <th>5524.75</th>
          <th>15329.3</th>
          <th>6929.45</th>
          <th>10954.7</th>
          <th>2612</th>
          <th>6594.03</th>
          <th>8327.75</th>
          <th>81883</th>
        </tr>
      </tfoot>
    </table>

    <div class="tables-row">
      <div>
        <div class="title">
          <h3>{examples[1].title} Component Example</h3>
        </div>

        <div class="table">
          <PivotTable data={examples[1]} />
        </div>
      </div>

      <div>
        <div>
          <h3>Second Example HTML</h3>
        </div>

        <table>
          <thead>
            <tr>
              <th>Row Labels</th>
              <th>Sum of revenue</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Boise</td>
              <td>4543</td>
            </tr>
            <tr>
              <td>Chicago</td>
              <td>8278.07</td>
            </tr>
            <tr>
              <td>Denver</td>
              <td>2462.65</td>
            </tr>
            <tr>
              <td>Las Vegas</td>
              <td>5524.75</td>
            </tr>
            <tr>
              <td>Los Angelas</td>
              <td>2544.73</td>
            </tr>
            <tr>
              <td>Memphis</td>
              <td>10954.7</td>
            </tr>
            <tr>
              <td>Miami</td>
              <td>7780.57</td>
            </tr>
            <tr>
              <td>Milwaukee</td>
              <td>8327.75</td>
            </tr>
            <tr>
              <td>New York</td>
              <td>15329.3</td>
            </tr>
            <tr>
              <td>Portland</td>
              <td>6929.45</td>
            </tr>
            <tr>
              <td>Salt Lake City</td>
              <td>2612</td>
            </tr>
            <tr>
              <td>Seattle</td>
              <td>6594.03</td>
            </tr>

          </tbody>

          <tfoot>
            <tr>
              <th>Grand Total</th>
              <th>81883</th>
            </tr>
          </tfoot>
        </table>
      </div>

    </div>

    <div class="title">
      <h3>{examples[2].title} Component Example</h3>
    </div>

    <div class="table">
      <PivotTable data={examples[2]} />
    </div>

    <div>
      <h3>Third Example HTML</h3>
    </div>

    <table>
      <thead>
        <tr>
          <th />
          <th>Sum of revenue</th>
          <th>Sum of unit_price</th>
          <th>Sum of shopping_fee</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Andrew Cencini</td>
          <td>15329.3</td>
          <td>230.9</td>
          <td>1532.93</td>
        </tr>

        <tr>
          <td>Anne Larsen</td>
          <td>18735.27</td>
          <td>321.94</td>
          <td>1873.527</td>
        </tr>

        <tr>
          <td>Jan Kotas</td>
          <td>2464.65</td>
          <td>74.95</td>
          <td>246.465</td>
        </tr>

        <tr>
          <td>Laura Giussani</td>
          <td>8278.07</td>
          <td>104.69</td>
          <td>827.807</td>
        </tr>

        <tr>
          <td>Mariya Sergienko</td>
          <td>8069.48</td>
          <td>161.14</td>
          <td>806.948</td>
        </tr>

        <tr>
          <td>Michael Neipper</td>
          <td>8327.75</td>
          <td>174.25</td>
          <td>832.775</td>
        </tr>

        <tr>
          <td>Nancy Freehafer</td>
          <td>18066.48</td>
          <td>296.09</td>
          <td>1806.648</td>
        </tr>

        <tr>
          <td>Robert Zare</td>
          <td>2612</td>
          <td>63.95</td>
          <td>261.2</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <th>Grand Total</th>
          <th>81883</th>
          <th>1427.91</th>
          <th>8188.3</th>
        </tr>
      </tfoot>
    </table>

    <div class="title">
      <h3>{examples[3].title} Component Example</h3>
    </div>

    <div class="table">
      <PivotTable data={examples[3]} />
    </div>

    <div>
      <h3>Forth Example HTML</h3>
    </div>

    <table>
      <thead>
        <tr>
          <th>Sum of revenue</th>
          <th>Column Labels</th>
          <th colspan="6" />
        </tr>
        <tr>
          <th>Row Labels</th>
          <th>Company A</th>
          <th>Company BB</th>
          <th>Company C</th>
          <th>Company J</th>
          <th>Company Y</th>
          <th>Company Z</th>
          <th>Grand Total</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Chicago</td>
          <td />
          <td />
          <td />
          <td>1584</td>
          <td>1628</td>
          <td />
          <td>3212</td>
        </tr>
        <tr>

          <td>Los Angelas</td>
          <td />
          <td />
          <td>490</td>
          <td />
          <td />
          <td />
          <td>490</td>
        </tr>
        <tr>
          <td>Memphis</td>
          <td />
          <td>460</td>
          <td />
          <td />
          <td />
          <td />
          <td>460</td>
        </tr>
        <tr>
          <td>Miami</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>1821.6</td>
          <td>1821.6</td>
        </tr>
        <tr>
          <td>Seattle</td>
          <td>1619.2</td>
          <td />
          <td />
          <td />
          <td />
          <td />
          <td>1619.2</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <th>Grand Total</th>
          <th>1619.2</th>
          <th>460</th>
          <th>490</th>
          <th>1584</th>
          <th>1628</th>
          <th>1821.6</th>
          <th>7602.8</th>
        </tr>
      </tfoot>
    </table> 

    <!-- <div class="title">
      <h3>{examples[4].title} Component Example</h3>
    </div>

    <div class="table">
      <PivotTable data={examples[4]} />
    </div>

    <div>
      <h3>Fifth Example HTML</h3>
    </div>

    <table>
      <thead>
        <tr>
          <th>Sum of revenue</th>
          <th>Column Labels</th>
          <th />
          <th />
          <th />
        </tr>

        <tr>
          <th />
          <th>12/10/14</th>
          <th />
          <th>12/10/14 Total</th>
          <th>Grand Total</th>
        </tr>

        <tr>
          <th />
          <th>Dried Fruit & Nuts</th>
          <th>Dried Fruit & Nuts Total</th>
          <th />
          <th />
        </tr>

        <tr>
          <th>Row Labels</th>
          <th>Almonds</th>
          <th />
          <th />
          <th />
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Laura Giussani</td>
          <td>810</td>
          <td>810</td>
          <td>810</td>
          <td>810</td>
        </tr>
        <tr>
          <td>123 10th Street</td>
          <td>810</td>
          <td>810</td>
          <td>810</td>
          <td>810</td>
        </tr>
        <tr>
          <td>Chicago</td>
          <td>810</td>
          <td>810</td>
          <td>810</td>
          <td>810</td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <th>Grand Total</th>
          <th>810</th>
          <th>810</th>
          <th>810</th>
          <th>810</th>
        </tr>
      </tfoot>
    </table> -->
  </div>
</div>
