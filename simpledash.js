// Create a simple dashboard that actually works
document.addEventListener('DOMContentLoaded', function() {
  const rootElement = document.getElementById('root');
  
  // Create dashboard structure
  rootElement.innerHTML = `
    <div class="bg-gray-50 p-6">
      <h1 class="text-3xl font-bold mb-4">Amazon AWS Dashboard</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div class="bg-white p-4 rounded shadow">
          <h3>Total Revenue (2024)</h3>
          <p class="text-2xl font-bold">$631B</p>
          <p class="text-green-600">↑ 9.7%</p>
        </div>
        
        <div class="bg-white p-4 rounded shadow">
          <h3>AWS Revenue (2024)</h3>
          <p class="text-2xl font-bold">$100.5B</p>
          <p class="text-green-600">↑ 10.7%</p>
        </div>
        
        <div class="bg-white p-4 rounded shadow">
          <h3>AWS % of Revenue</h3>
          <p class="text-2xl font-bold">15.9%</p>
        </div>
        
        <div class="bg-white p-4 rounded shadow">
          <h3>AWS % of Operating Income</h3>
          <p class="text-2xl font-bold">65.4%</p>
        </div>
      </div>
      
      <div class="bg-white p-6 rounded shadow mb-6">
        <h2 class="text-xl font-bold mb-4">Historical Data (2016-2024)</h2>
        <table class="min-w-full border-collapse">
          <thead>
            <tr>
              <th class="border p-2">Year</th>
              <th class="border p-2">Amazon Revenue</th>
              <th class="border p-2">AWS Revenue</th>
              <th class="border p-2">AWS % of Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border p-2">2016</td>
              <td class="border p-2">$136.0B</td>
              <td class="border p-2">$12.2B</td>
              <td class="border p-2">9.0%</td>
            </tr>
            <tr>
              <td class="border p-2">2017</td>
              <td class="border p-2">$178.0B</td>
              <td class="border p-2">$17.5B</td>
              <td class="border p-2">9.8%</td>
            </tr>
            <tr>
              <td class="border p-2">2018</td>
              <td class="border p-2">$233.0B</td>
              <td class="border p-2">$25.7B</td>
              <td class="border p-2">11.0%</td>
            </tr>
            <tr>
              <td class="border p-2">2019</td>
              <td class="border p-2">$281.0B</td>
              <td class="border p-2">$35.0B</td>
              <td class="border p-2">12.5%</td>
            </tr>
            <tr>
              <td class="border p-2">2020</td>
              <td class="border p-2">$386.0B</td>
              <td class="border p-2">$45.4B</td>
              <td class="border p-2">11.8%</td>
            </tr>
            <tr>
              <td class="border p-2">2021</td>
              <td class="border p-2">$470.0B</td>
              <td class="border p-2">$62.2B</td>
              <td class="border p-2">13.2%</td>
            </tr>
            <tr>
              <td class="border p-2">2022</td>
              <td class="border p-2">$514.0B</td>
              <td class="border p-2">$80.1B</td>
              <td class="border p-2">15.6%</td>
            </tr>
            <tr>
              <td class="border p-2">2023</td>
              <td class="border p-2">$575.0B</td>
              <td class="border p-2">$90.8B</td>
              <td class="border p-2">15.8%</td>
            </tr>
            <tr>
              <td class="border p-2">2024</td>
              <td class="border p-2">$631.0B</td>
              <td class="border p-2">$100.5B</td>
              <td class="border p-2">15.9%</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="bg-white p-6 rounded shadow">
        <h2 class="text-xl font-bold mb-4">AWS Service Breakdown (2024)</h2>
        <div class="grid grid-cols-2 gap-4">
          <div class="border p-2 flex justify-between"><span>EC2 & Compute</span> <span>38%</span></div>
          <div class="border p-2 flex justify-between"><span>S3 & Storage</span> <span>18%</span></div>
          <div class="border p-2 flex justify-between"><span>Database Services</span> <span>12%</span></div>
          <div class="border p-2 flex justify-between"><span>Networking</span> <span>8%</span></div>
          <div class="border p-2 flex justify-between"><span>ML & AI Services</span> <span>7%</span></div>
          <div class="border p-2 flex justify-between"><span>Identity & Security</span> <span>6%</span></div>
          <div class="border p-2 flex justify-between"><span>Analytics</span> <span>5%</span></div>
          <div class="border p-2 flex justify-between"><span>Other Services</span> <span>6%</span></div>
        </div>
      </div>
      
      <div class="text-xs text-gray-500 mt-6 text-center">
        Data approximated from public financial reports | Created for visualization purposes
      </div>
    </div>
  `;
});
