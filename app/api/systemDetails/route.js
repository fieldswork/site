import os from "os";
import { exec } from "child_process";
import { promisify } from "util";

// System monitoring code modified from Sam's course (https://www.picourse.dev/next-js) for use on a ThinkPad A485
// Sam Meech-Ward's info: https://ko-fi.com/meechward
// Thanks for the inspiration, Sam! - Fields

const execAsync = promisify(exec);

async function getCpuUsage() {
  const { stdout } = await execAsync("top -bn1 | grep 'Cpu(s)' | sed 's/.*, *\\([0-9.]*\\)%* id.*/\\1/' | awk '{print 100 - $1}'");
  return parseFloat(stdout.trim()).toFixed(1);
}

async function getCpuTemp() {
  const { stdout } = await execAsync("sensors | grep 'Tctl' | awk '{print $2}'");
  return parseFloat(stdout.replace("+", "").replace("°C", ""));
}

function bytesToGB(bytes) {
  return (bytes / (1024 * 1024 * 1024)).toFixed(2);
}

export async function GET(req, { params }) {
  try {
    const cpuUsage = await getCpuUsage();
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const cpuTemp = await getCpuTemp();

    return new Response(
      JSON.stringify({
        cpuTemp,
        cpuUsage,
        memoryUsage: {
          total: parseFloat(bytesToGB(totalMem)),
          used: parseFloat(bytesToGB(usedMem)),
          free: parseFloat(bytesToGB(freeMem)),
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Unable to fetch system details' }), { status: 500 });
  }
}