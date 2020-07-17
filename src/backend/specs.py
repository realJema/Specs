'''
To install 
pip3 install tabulate
pip3 install gputil
pip3 install psutil
'''
import psutil
import platform
from datetime import datetime


data = {}

# function to convert bytes 
def get_size(bytes, suffix="B"):
    """
    Scale bytes to its proper format
    e.g:
        1253656 => '1.20MB'
        1253656678 => '1.17GB'
    """
    factor = 1024
    for unit in ["", "K", "M", "G", "T", "P"]:
        if bytes < factor:
            return f"{bytes:.2f}{unit}{suffix}"
        bytes /= factor

def execute(): 
    uname = platform.uname()
    data['System_information'] = {"System": uname.system, "Node Name": uname.node, "Release": uname.release, "Version": uname.version, "Machine": uname.machine, "Processor": uname.processor}

    # Boot Time
    boot_time_timestamp = psutil.boot_time()
    bt = datetime.fromtimestamp(boot_time_timestamp)
    data['Up_time'] = {'year': bt.year, 'month': bt.month, 'day': bt.day, 'hour': bt.hour, 'minute': bt.minute, 'seconds': bt.second }


    # let's print CPU information
    Physical_cores =  psutil.cpu_count(logical=False)
    Total_cores =  psutil.cpu_count(logical=True)
    # CPU frequencies
    cpufreq = psutil.cpu_freq()
    Max_Frequency = cpufreq.max
    Min_Frequency = cpufreq.min
    Current_Frequency = cpufreq.current

    data['CPU_info'] = {
    "Physical_cores" : Physical_cores,
    "Total_cores" : Total_cores,
    "cpufreq" : cpufreq,
    "Max_Frequency" : Max_Frequency,
    "Min_Frequency" : Min_Frequency,
    "Current_Frequency" : Current_Frequency,
    }
    # CPU usage
    # for i, percentage in enumerate(psutil.cpu_percent(percpu=True, interval=1)):
    #     data['CPU_info']['Usage'] = { str(i) : percentage }

    data["CPU_info"]["Usage"] = { "Total" : psutil.cpu_percent()}


    # Memory Information
    # get the memory details
    svmem = psutil.virtual_memory()
    data["Ram"] = {
    "Total" : get_size(svmem.total),
    "Available" : get_size(svmem.available),
    "Used" : get_size(svmem.used),
    "Percentage": svmem.percent,
    }
    # get the swap memory details (if exists)
    swap = psutil.swap_memory()
    data["Ram_swap"] = {
    "Total" : get_size(swap.total),
    "Free" : get_size(swap.free),
    "Used" : get_size(swap.used),
    "Percentage": swap.percent,
    }

    # Disk Information
    # get all disk partitions
    data["Partitions"] = []
    partitions = psutil.disk_partitions()
    for partition in partitions:
        name = partition.device
        mnt_pt = partition.mountpoint
        sys_type = partition.fstype
        try:
            partition_usage = psutil.disk_usage(partition.mountpoint)
        except PermissionError:
            # this can be catched due to the disk that
            # isn't ready
            continue
        Total_Size = get_size(partition_usage.total)
        Used = get_size(partition_usage.used)
        Free = get_size(partition_usage.free)
        Percentage = partition_usage.percent
        details = {
            "name" : name,
            "mnt_pt" : mnt_pt,
            "sys_type" : sys_type,
            "Total_Size" : Total_Size,
            "Used" : Used,
            "Free" : Free,
            "Percentage" : Percentage
        }
        # append details into array of partitions 
        data["Partitions"].append(details)


    return data
